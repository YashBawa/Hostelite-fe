import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { allUsers, createHealthReport } from "../ApiUtils";
import SelectMenu from "../Common/Elements/SelectMenu";

export default function NewHealthReport(props) {
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== 0 && description.length !== 0) {
      createHealthReport(id, description).then(() => {
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
        <SelectMenu people={users} setId={setId} />
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
