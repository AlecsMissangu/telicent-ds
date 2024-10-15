declare const useTypeaheadQuery: (url: string, queryParamKey: string, query: string, onTransform?: <Data>(data: Data) => any) => import('@tanstack/react-query').DefinedUseQueryResult<unknown, Error>;
export default useTypeaheadQuery;
