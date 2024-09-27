import { Button } from "@mui/material";

type DeleteCatProps = {
  id: string;
  fetchCats: () => void;
};

const DeleteCat = ({ id, fetchCats }: DeleteCatProps) => {
  const deleteCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      if (response.ok) {
        console.log("Cat deleted successfully");
        fetchCats();
      } else {
        console.warn("Failed to delete cat");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return <Button onClick={deleteCat}>Delete</Button>;
};

export default DeleteCat;
