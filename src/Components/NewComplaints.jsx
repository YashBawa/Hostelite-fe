import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function NewComplaint(props) {
  const [room, setRoom] = useState(332);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.close();
  };

  return (
    <div className="p-4">
      <p className="text-[#184E77] font-bold text-3xl flex justify-center items-center">
        Add New Complaint
      </p>
      <form className="pt-12 flex flex-col gap-6" onSubmit={handleSubmit}>
        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          label="Room No."
          fullWidth
          variant="outlined"
        ></TextField>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          fullWidth
          variant="outlined"
        ></TextField>
        <Button type="submit" variant="contained" className="pt-6">
          Add
        </Button>
      </form>
    </div>
  );
}
