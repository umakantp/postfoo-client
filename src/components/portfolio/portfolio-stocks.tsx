import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import * as React from 'react'
import PortfolioAddStockForm from 'src/components/portfolio/components/portfolio-add-stock-form'
import { Button } from 'src/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from 'src/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table'
import { Exchange, PortfolioResponseFragment, PortfolioStockResponseFragment, PortfolioStocksQuery, usePortfolioStocksQuery } from 'src/generated/graphql'
import { safeRound } from 'src/utils/utils'

type PortfolioStockCols = Pick<PortfolioStockResponseFragment, 'id' | 'units' | 'cost'> & { name: string, lastPrice: number, value: number, symbol: string, exchange: Exchange }

const parseStocks = (data?: PortfolioStocksQuery): PortfolioStockCols[] => {
  return data?.portfolioStocks?.nodes.map(node => ({
    id: node.id,
    name: node.stock.name,
    lastPrice: node.stock.lastPrice,
    symbol: node.stock.symbol,
    exchange: node.stock.exchange,
    units: node.units,
    cost: node.cost,
    value: safeRound(node.units * node.stock.lastPrice),
  })) || []
}

const columns: ColumnDef<PortfolioStockCols>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return <>{row.getValue('name')} - {row.original.exchange} - {row.original.symbol}</>
    },
  },
  {
    accessorKey: 'lastPrice',
    header: 'Last Price',
    cell: ({ row }) => {
      return <span className="text-right">₹ {row.getValue('lastPrice')}</span>
    }
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => {
      return <span className="text-right">₹ {row.getValue('cost')}</span>
    }
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
    }
  },
]

interface PortfolioStocksProps {
  portfolio: PortfolioResponseFragment,
}

const PortfolioStocks: React.FC<PortfolioStocksProps> = ({ portfolio }) => {
  const { data } = usePortfolioStocksQuery({
    input: { portfolioId: portfolio.id },
  })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [showAddStockDialog, setShowAddStockDialog] = React.useState(false)

  const table = useReactTable({
    data: React.useMemo(() => parseStocks(data), [data]),
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
        <Dialog open={showAddStockDialog} onOpenChange={setShowAddStockDialog}>
          <DialogTrigger asChild>
            <Button>Add Stock</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Stock</DialogTitle>
              <DialogDescription>
                Add a stock to your portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <PortfolioAddStockForm portfolioId={portfolio.id} setShowAddStockDialog={setShowAddStockDialog} />
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
                          header.getContext()
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
                        cell.getContext()
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

export default PortfolioStocks
