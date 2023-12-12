import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
const Table = ({ children, className }: IProps) => {
  return (
    <div className={`bg-primary-gray-0 overflow-x-auto ${className}`}>
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader = ({ children, className }: IProps) => {
  return (
    <thead>
      <tr className={`title-row ${className}`}>{children}</tr>
    </thead>
  );
};
const TableBody = ({ children, className }: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};
const TableRow = ({ children, className }: IProps) => {
  return <tr className={className}>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
