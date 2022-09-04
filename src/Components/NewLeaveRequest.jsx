import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function NewLeaveRequest(props) {
  const [reason, setReason] = useState("");
  const [visitingPlace, setVisitingPlace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.close();
  };

  return (
    <div className="p-4">
      <p className="text-[#184E77] font-bold text-3xl flex justify-center items-center">
        Add New Leave Request
      </p>
      <form className="pt-12 flex flex-col gap-6" onSubmit={handleSubmit}>
        <TextField
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          label="Reason"
          fullWidth
          variant="outlined"
        ></TextField>
        <TextField
          value={visitingPlace}
          onChange={(e) => setVisitingPlace(e.target.value)}
          label="Visiting Place"
          fullWidth
          variant="outlined"
        ></TextField>
        <TextField
          label="From"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="date"
          variant="outlined"
        ></TextField>
        <TextField
          label="To"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        ></TextField>
        <Button type="submit" variant="contained" className="pt-6">
          Add
        </Button>
      </form>
    </div>
  );
}
