import { Card, Container, Stack, Typography } from "@mui/material";
import { useGetBudgetRecordsQuery } from "../api/budget-record.ts";

function App() {
  const { data } = useGetBudgetRecordsQuery();

  return (
    <Container>
      <Stack direction={"column"} gap={1}>
        {data?.map((item) => (
          <Card key={item._id} sx={{ p: 1 }}>
            <Typography variant="h5" gutterBottom>
              {item.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item.value}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default App;
