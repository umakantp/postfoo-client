import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'
import PortfolioAddFundForm from 'src/components/portfolio/components/portfolio-add-fund-form'
import { Button } from 'src/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from 'src/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table'
import { FundPlan, FundType, PortfolioFundResponseFragment, PortfolioFundsQuery, PortfolioResponseFragment, usePortfolioFundsQuery } from 'src/generated/graphql'
import { safeRound } from 'src/utils/utils'

type PortfolioFundCols = Pick<PortfolioFundResponseFragment, 'id' | 'units' | 'cost'> & { name: string, lastNav: number, value: number, plan?: FundPlan, type?: FundType }

const parseFunds = (data?: PortfolioFundsQuery): PortfolioFundCols[] => {
  return data?.portfolioFunds?.nodes.map(node => ({
    id: node.id,
    name: node.fund.name,
    lastNav: node.fund.lastNav,
    plan: node.fund.plan,
    type: node.fund.type,
    units: node.units,
    cost: node.cost,
    value: safeRound(node.units * node.fund.lastNav),
  })) || []
}

const columns: ColumnDef<PortfolioFundCols>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return <>{row.getValue('name')} - {row.original.type} - {row.original.plan}</>
    },
  },
  {
    accessorKey: 'lastNav',
    header: 'Last NAV',
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => {
      return <span className="text-right">₹ {row.getValue('cost')}</span>
    },
  },
  {
    accessorKey: 'units',
    header: 'Units',
  },
  {
    accessorKey: 'value',
    header: 'Current Value',
    cell: ({ row }) => {
      return <span className="text-right">₹ {row.getValue('value')}</span>
    },
  },
]

interface PortfolioFundsProps {
  portfolio: PortfolioResponseFragment,
}

const PortfolioFunds: React.FC<PortfolioFundsProps> = ({ portfolio }) => {
  const { data } = usePortfolioFundsQuery({
    input: { portfolioId: portfolio.id },
  })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [showAddFundDialog, setShowAddFundDialog] = React.useState(false)

  const table = useReactTable({
    data: React.useMemo(() => parseFunds(data), [data]),
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Dialog open={showAddFundDialog} onOpenChange={setShowAddFundDialog}>
          <DialogTrigger asChild>
            <Button>Add Fund</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Fund</DialogTitle>
              <DialogDescription>
                Add a fund to your portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <PortfolioAddFundForm portfolioId={portfolio.id} setShowAddFundDialog={setShowAddFundDialog} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="[&:has([role=checkbox])]:pl-3"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className="[&:has([role=checkbox])]:pl-3"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PortfolioFunds
