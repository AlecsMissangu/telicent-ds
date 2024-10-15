import { default as React } from '../../../node_modules/react';

type RecentSearchProps = Partial<{
    nothingFoundText: string;
    children: React.ReactNode;
}>;
declare const RecentSearches: React.FC<RecentSearchProps>;
export default RecentSearches;
