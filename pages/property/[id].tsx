import { useRouter } from 'next/router';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import PropertyDetail from '@/components/property/PropertyDetail';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);

  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
