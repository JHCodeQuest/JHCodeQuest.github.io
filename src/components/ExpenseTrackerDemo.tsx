import { useState, type FormEvent } from 'react'

type Expense = { date: string; description: string; category: string; pennies: number }

const samples: Expense[] = [
  { date: '2026-10-01', description: 'Sample weekly groceries', category: 'Food', pennies: 2840 },
  { date: '2026-10-02', description: 'Sample bus ticket', category: 'Travel', pennies: 450 },
  { date: '2026-10-03', description: 'Sample notebook', category: 'Learning', pennies: 625 },
]
const money = (pennies: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(pennies / 100)
const inputStyle = 'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 mt-2 text-[var(--color-text-primary)] focus:outline-2 focus:outline-[var(--color-accent)]'
const panelStyle = 'rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6'

/** Browser adaptation: state is intentionally ephemeral; amounts use integer pennies. */
export function ExpenseTrackerDemo() {
  const [expenses, setExpenses] = useState<Expense[]>(samples)
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const visible = expenses.filter(expense => !filter.trim() || expense.category.toLowerCase() === filter.trim().toLowerCase())
  const total = visible.reduce((sum, expense) => sum + expense.pennies, 0)

  function addExpense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    const date = String(fields.get('date') ?? '')
    const description = String(fields.get('description') ?? '').trim()
    const category = String(fields.get('category') ?? '').trim()
    const amount = String(fields.get('amount') ?? '').trim()
    // String parsing avoids rounding a binary floating-point amount into pennies.
    const match = /^(\d{1,6})(?:\.(\d{1,2}))?$/.exec(amount)
    const pennies = match ? Number(match[1]) * 100 + Number((match[2] ?? '').padEnd(2, '0')) : 0
    const parsedDate = new Date(`${date}T00:00:00Z`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date || !description || !category || !match || pennies <= 0) {
      setMessage('Enter a valid date, description, category and amount from £0.01 to £999,999.99, with at most two decimal places.')
      return
    }
    if (expenses.length >= 100) {
      setMessage('This demo allows 100 expenses. Reset the samples to start again.')
      return
    }
    setExpenses(current => [...current, { date, description, category, pennies }])
    setFilter('')
    setMessage('Expense added. Entries reset when you refresh this page.')
    form.reset()
  }

  function reset() {
    setExpenses(samples)
    setFilter('')
    setMessage('Sample expenses restored.')
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
      <a href="/#projects" className="text-[var(--color-accent)] underline underline-offset-4">← Back to portfolio</a>
      <header className="my-10">
        <p className="text-[var(--color-accent)] uppercase tracking-widest text-sm">Learning project · interactive demo</p>
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold mt-3">Expense Tracker</h1>
        <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl">Try the core workflow of my Python CLI project in this JavaScript browser adaptation. Start with synthetic examples or add your own sample entries.</p>
        <p className="text-[var(--color-text-secondary)] mt-2">Nothing is saved or sent. Refreshing resets the demo. Use fictional data.</p>
        <a className="inline-block text-[var(--color-accent)] underline underline-offset-4 mt-4" href="https://github.com/JHCodeQuest/personal-expense-tracker" target="_blank" rel="noopener noreferrer">View Python source and limitations ↗</a>
      </header>
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <section className={panelStyle} aria-labelledby="add-heading">
          <h2 id="add-heading" className="text-xl font-semibold mb-5">Add an expense</h2>
          <form onSubmit={addExpense} className="space-y-4">
            <label className="block">Date<input className={inputStyle} name="date" type="date" required /></label>
            <label className="block">Description<input className={inputStyle} name="description" maxLength={100} placeholder="Sample lunch" required /></label>
            <label className="block">Category<input className={inputStyle} name="category" maxLength={40} placeholder="Food" required /></label>
            <label className="block">Amount (£)<input className={inputStyle} name="amount" type="text" inputMode="decimal" maxLength={9} placeholder="12.50" required aria-describedby="amount-help" /></label>
            <p id="amount-help" className="text-sm text-[var(--color-text-secondary)]">£0.01–£999,999.99 · up to two decimal places</p>
            <button className="w-full rounded-xl bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold p-3" type="submit">Add expense</button>
          </form>
          <p role="status" className="mt-4 text-sm min-h-12">{message}</p>
        </section>
        <section className={`${panelStyle} min-w-0`} aria-labelledby="expenses-heading">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><h2 id="expenses-heading" className="text-xl font-semibold">Your demo expenses</h2><p className="text-[var(--color-text-secondary)] text-sm mt-1">{visible.length} of {expenses.length} entries</p></div>
            <button type="button" onClick={reset} className="rounded-xl border border-[var(--color-border-accent)] px-4 py-2 text-sm">Reset samples</button>
          </div>
          <label className="block mt-6">Filter by category<input className={inputStyle} value={filter} onChange={event => setFilter(event.target.value)} placeholder="All categories — try Food" maxLength={40} /></label>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">Exact category match, ignoring case. Clear to show all.</p>
          <div className="rounded-xl bg-[var(--color-accent-subtle)] p-5 my-6" aria-live="polite">
            <p className="text-sm text-[var(--color-text-secondary)]">{filter.trim() ? 'Filtered total' : 'Total expenses'}</p>
            <p className="text-4xl font-semibold text-[var(--color-accent)] mt-1">{money(total)}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">Expenses matching the category filter</caption>
              <thead><tr className="border-b border-[var(--color-border)]">{['Date', 'Description', 'Category', 'Amount'].map(heading => <th key={heading} scope="col" className="p-3">{heading}</th>)}</tr></thead>
              <tbody>{visible.map((expense, index) => <tr key={index} className="border-b border-[var(--color-border)]"><td className="p-3 whitespace-nowrap">{expense.date.split('-').reverse().join('/')}</td><td className="p-3 break-words max-w-64">{expense.description}</td><td className="p-3 break-words max-w-40">{expense.category}</td><td className="p-3 whitespace-nowrap">{money(expense.pennies)}</td></tr>)}</tbody>
            </table>
          </div>
          {!visible.length && <p className="py-8 text-[var(--color-text-secondary)]">No expenses match that category. Clear the filter to show all.</p>}
        </section>
      </div>
    </main>
  )
}
