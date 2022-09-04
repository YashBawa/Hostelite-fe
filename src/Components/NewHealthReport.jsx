import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { allUsers, createHealthReport } from "../ApiUtils";
import SelectMenu from "../Common/Elements/SelectMenu";

export default function NewHealthReport(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length !== 0 && description.length !== 0) {
      createHealthReport(name, description).then(() => {
        props.close();
      });
    }
  };

  useEffect(() => {
    allUsers().then((data) => {
      setUsers(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="p-4">
      <p className="text-[#184E77] font-bold text-3xl flex justify-center items-center">
        Add new Health Report
      </p>
      <form className="pt-12 flex flex-col gap-6" onSubmit={handleSubmit}>
        <SelectMenu people={users} />
        <TextField
          label="Student Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          fullWidth
          variant="outlined"
        ></TextField>
        <Button type="submit" variant="contained" className="pt-6">
          Create
        </Button>
      </form>
    </div>
  );
}
