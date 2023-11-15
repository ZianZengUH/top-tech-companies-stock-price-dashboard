import { Box, Flex, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import Card from 'components/card/Card';
import React from 'react';

type SectorRow = {
  sector: string;
  percentage: number;
};

const columnHelper = createColumnHelper<SectorRow>();

const columns = [
  columnHelper.accessor('sector', {
    header: () => 'Sector',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('percentage', {
    header: () => 'Percentage',
    cell: (info) => (
      <Flex align='center'>
        <Progress colorScheme='green' size='sm' value={info.getValue()} w='full' />
        <Text ml={2}>{info.getValue().toFixed(2)}%</Text>
      </Flex>
    ),
  }),
];

export default function SectorPercentageTable(props: { sectorData: SectorRow[] }) {
  const { sectorData } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const tableInstance = useReactTable({
    data: sectorData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card w='100%' overflowX='auto'>
      <Table variant='simple'>
        <Thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} color={textColor}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}