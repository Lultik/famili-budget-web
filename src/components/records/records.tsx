"use client";
import React, { useEffect, useState } from "react";
import { BudgetRecord } from "@/types";

interface RecordsProps {}

export const Records: React.FC<RecordsProps> = ({}) => {
  const [records, setRecords] = useState<BudgetRecord[]>([]);

  console.log(records);
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:5000/api/budget-record");
      const records = await data.json();
      setRecords(records);
    })();
  }, []);

  return records.map((record) => (
    <div key={record._id}>
      {record._id} - {record.category} - {record.value} - {record.description}
    </div>
  ));
};
