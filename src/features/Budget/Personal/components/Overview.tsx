import { Stack } from "@mui/material";
import { OverviewRecord } from "./OverviewRecord.tsx";
import { useGetBudgetRecordsQuery } from "./../../../../api/budget-record.ts";

export const Overview = () => {
  const { data } = useGetBudgetRecordsQuery();
  console.log(data);
  return (
    <Stack>
      <OverviewRecord title="Total balance" amount="$1100" />

      <OverviewRecord title="Revolut" amount="$600" />
      <OverviewRecord title="Pekao" amount="$400" />

      <OverviewRecord title="Cash" amount="$100" />
    </Stack>
  );
};
