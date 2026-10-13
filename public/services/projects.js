/*
 * Renders the project showcase from projects.json, then enhances the cards with
 * live GitHub data if it is available. The page must be fully readable without
 * that second step ever succeeding.
 */
(function () {
    'use strict';

    var CACHE_KEY = 'jhcq.repos.v1';
    var CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

    var grid = document.getElementById('project-grid');
    var status = document.getElementById('grid-status');
    var filterBar = document.getElementById('filter-bar');
    var noResults = document.getElementById('no-results');
    var statsStatus = document.getElementById('stats-status');

    // Colours lifted from GitHub's own language palette.
    var LANGUAGE_COLOURS = {
        'TypeScript': '#3178c6',
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'C#': '#178600',
        'Jupyter Notebook': '#DA5B0B',
        'Ruby': '#701516',
        'Shell': '#89e051'
    };

    function el(tag, className, text) {
        var node = document.createElement(tag);
        if (className) { node.className = className; }
        if (text !== undefined && text !== null) { node.textContent = text; }
        return node;
    }

    function relativeDate(iso) {
        var then = new Date(iso).getTime();
        if (isNaN(then)) { return ''; }
        var days = Math.floor((Date.now() - then) / 86400000);
        if (days <= 0) { return 'updated today'; }
        if (days === 1) { return 'updated yesterday'; }
        if (days < 30) { return 'updated ' + days + ' days ago'; }
        var months = Math.round(days / 30);
        if (months < 12) { return 'updated ' + months + ' month' + (months === 1 ? '' : 's') + ' ago'; }
        var years = Math.round(days / 365);
        return 'updated ' + years + ' year' + (years === 1 ? '' : 's') + ' ago';
    }

    function buildCard(project, user) {
        var card = el('article', 'project-card');
        card.setAttribute('data-repo', project.repo);
        card.setAttribute('data-filters', (project.filters || []).join('|'));
        if (project.featured) { card.classList.add('is-featured'); }

        var head = el('div', 'project-head');
        head.appendChild(el('h3', null, project.title));
        if (project.demo) {
            head.appendChild(el('span', 'live-badge', 'Live'));
        }
        card.appendChild(head);

        // Populated later by the GitHub call; reserves its own line so nothing shifts.
        var meta = el('p', 'project-meta');
        meta.setAttribute('data-role', 'meta');
        card.appendChild(meta);

        card.appendChild(el('p', 'project-blurb', project.blurb));

        var tags = el('ul', 'tag-list');
        (project.tags || []).forEach(function (tag) {
            tags.appendChild(el('li', 'tag', tag));
        });
        card.appendChild(tags);

        var links = el('div', 'project-links');
        if (project.demo) {
            var demo = el('a', 'project-link primary', 'Live demo');
            demo.href = project.demo;
            demo.target = '_blank';
            demo.rel = 'noopener';
            demo.setAttribute('aria-label', 'Open the live demo of ' + project.title);
            links.appendChild(demo);
        }
        if (project.video) {
            var video = el('a', 'project-link' + (project.demo ? '' : ' primary'), 'Watch demo');
            video.href = project.video;
            video.target = '_blank';
            video.rel = 'noopener';
            video.setAttribute('aria-label', 'Watch a demo video of ' + project.title);
            links.appendChild(video);
        }
        var source = el('a', 'project-link', 'Source');
        source.href = 'https://github.com/' + user + '/' + project.repo;
        source.target = '_blank';
        source.rel = 'noopener';
        source.setAttribute('aria-label', 'View the source code for ' + project.title + ' on GitHub');
        links.appendChild(source);
        card.appendChild(links);

        return card;
    }

    function buildFilters(filters) {
        if (!filterBar) { return; }
        var all = ['All'].concat(filters || []);
        all.forEach(function (name, index) {
            var button = el('button', 'filter-btn', name);
            button.type = 'button';
            button.setAttribute('data-filter', name);
            button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
            if (index === 0) { button.classList.add('is-active'); }
            button.addEventListener('click', function () { applyFilter(name); });
            filterBar.appendChild(button);
        });
    }

    function applyFilter(name) {
        var visible = 0;

        Array.prototype.forEach.call(filterBar.children, function (button) {
            var active = button.getAttribute('data-filter') === name;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        Array.prototype.forEach.call(grid.querySelectorAll('.project-card'), function (card) {
            var owned = (card.getAttribute('data-filters') || '').split('|');
            var show = name === 'All' || owned.indexOf(name) !== -1;
            card.hidden = !show;
            if (show) { visible++; }
        });

        if (noResults) { noResults.hidden = visible !== 0; }
    }

    /* ---- live GitHub stats (progressive enhancement only) ---- */

    function readCache() {
        try {
            var raw = window.localStorage.getItem(CACHE_KEY);
            if (!raw) { return null; }
            var parsed = JSON.parse(raw);
            if (!parsed || (Date.now() - parsed.time) > CACHE_TTL) { return null; }
            return parsed.repos;
        } catch {
            return null;
        }
    }

    function writeCache(repos) {
        try {
            window.localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), repos: repos }));
        } catch {
            // Private browsing or a full quota. Not worth reporting.
        }
    }

    function applyStats(repos) {
        var byName = {};
        repos.forEach(function (repo) { byName[repo.name] = repo; });
        var enriched = 0;

        Array.prototype.forEach.call(grid.querySelectorAll('.project-card'), function (card) {
            var repo = byName[card.getAttribute('data-repo')];
            if (!repo) { return; }

            var meta = card.querySelector('[data-role="meta"]');
            meta.textContent = '';

            if (repo.language) {
                var dot = el('span', 'lang-dot');
                dot.style.backgroundColor = LANGUAGE_COLOURS[repo.language] || '#8b8b8b';
                meta.appendChild(dot);
                meta.appendChild(el('span', 'lang-name', repo.language));
            }
            if (repo.stargazers_count > 0) {
                meta.appendChild(el('span', 'meta-item', '★ ' + repo.stargazers_count));
            }
            if (repo.pushed_at) {
                meta.appendChild(el('span', 'meta-item', relativeDate(repo.pushed_at)));
            }
            enriched++;
        });

        if (enriched > 0 && statsStatus) { statsStatus.textContent = 'Stats are current.'; }
    }

    function loadStats(user) {
        var cached = readCache();
        if (cached) {
            applyStats(cached);
            return;
        }

        fetch('https://api.github.com/users/' + encodeURIComponent(user) + '/repos?per_page=100&sort=pushed')
            .then(function (response) {
                if (!response.ok) { throw new Error('GitHub API responded ' + response.status); }
                return response.json();
            })
            .then(function (repos) {
                if (!Array.isArray(repos)) { throw new Error('Unexpected GitHub API payload'); }
                // Keep only what the cards use, so the cache stays small.
                var trimmed = repos.map(function (repo) {
                    return {
                        name: repo.name,
                        language: repo.language,
                        stargazers_count: repo.stargazers_count,
                        pushed_at: repo.pushed_at
                    };
                });
                writeCache(trimmed);
                applyStats(trimmed);
            })
            .catch(function (err) {
                // Rate limited, offline, or blocked. The cards already stand on their own.
                console.warn('Skipping live GitHub stats:', err.message);
            });
    }

    /* ---- boot ---- */

    if (!grid) { return; }

    // The home page reuses this script for a short teaser: data-limit trims the
    // list to the first N featured projects and there is no filter bar.
    var limit = parseInt(grid.getAttribute('data-limit'), 10);

    fetch('projects.json')
        .then(function (response) {
            if (!response.ok) { throw new Error('projects.json responded ' + response.status); }
            return response.json();
        })
        .then(function (data) {
            var user = data.user || 'JHCodeQuest';
            var projects = data.projects;
            status.remove();

            if (limit > 0) {
                projects = projects.filter(function (p) { return p.featured; }).slice(0, limit);
            }

            projects.forEach(function (project) {
                grid.appendChild(buildCard(project, user));
            });

            buildFilters(data.filters);
            loadStats(user);
        })
        .catch(function (err) {
            console.error('Could not load projects:', err);
            status.textContent = 'Projects could not be loaded right now. They are all available on ';
            var link = el('a', null, 'my GitHub profile');
            link.href = 'https://github.com/JHCodeQuest';
            link.target = '_blank';
            link.rel = 'noopener';
            status.appendChild(link);
            status.appendChild(document.createTextNode('.'));
        });
}());
