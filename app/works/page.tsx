import { PageShell } from "@/components/page-shell"
import { WorksTable } from "@/components/works/works-table"

export const metadata = {
  title: "Works",
}

export default function WorksPage() {
  return (
    <PageShell title="Works">
      <WorksTable />
    </PageShell>
  )
}
