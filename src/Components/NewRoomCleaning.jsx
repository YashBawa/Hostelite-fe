import { Button, TextField } from "@mui/material";
import { useState } from "react";
// import { allUsers, createHealthReport } from "../ApiUtils";
// import SelectMenu from "../Common/Elements/SelectMenu";

export default function NewRoomCleaning(props) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (description.length !== 0) {
    //   createHealthReport(id, description).then(() => {
    //     props.close();
    //   });
    // }
    props.close();
  };

  return (
    <div className="p-4">
      <p className="text-[#184E77] font-bold text-3xl flex justify-center items-center">
        Add New Room Cleaning Request
      </p>
      <form className="pt-12 flex flex-col gap-6" onSubmit={handleSubmit}>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          fullWidth
          variant="outlined"
        ></TextField>
        <TextField
          type="date"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
