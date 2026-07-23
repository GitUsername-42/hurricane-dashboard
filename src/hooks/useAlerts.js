import { useQuery } from '@tanstack/react-query';
import { fetchAlerts } from '../api/noaa';

export function useAlerts() {
  return useQuery({
    queryKey: ['alerts'],
    queryFn: fetchAlerts,
    refetchInterval: 30000,
    staleTime: 15000
  });
}