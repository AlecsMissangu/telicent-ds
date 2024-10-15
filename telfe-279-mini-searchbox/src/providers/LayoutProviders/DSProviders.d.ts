import { OntologyService } from '@telicent-oss/ontologyservice';

type DSProvidersProps = Partial<{
    children: React.ReactNode;
    ontologyService: OntologyService;
}>;
declare const DSProviders: React.FC<DSProvidersProps>;
export default DSProviders;
