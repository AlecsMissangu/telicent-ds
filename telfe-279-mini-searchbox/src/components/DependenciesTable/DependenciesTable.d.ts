import { default as React } from '../../../node_modules/react';

interface DependenciesTable {
    dependencies: {
        [key: string]: string;
    };
    className?: string;
}
declare const DependenciesTable: React.FC<DependenciesTable>;
export default DependenciesTable;
