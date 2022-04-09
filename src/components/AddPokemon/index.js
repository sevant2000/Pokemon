import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";


const AddPost = ({ pokemons, addPokemon }) => {
  const [name, setName] = useState("");
  const [breed, setbreed] = useState("");
  const [desc, setdesc] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!breed || !name || !desc) {
      return toast.warning("Please fill in all fields!!");
    }
   

    const data = {
      id: pokemons.length > 0 ? pokemons[pokemons.length - 1].id + 1 : 0,
      breed,
      name,
      desc,
    };

    addPokemon(data);
    toast.success("pokemons added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">For Add New Pokemons</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Pokemons Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Breed"
                value={breed}
                onChange={(e) => setbreed(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Discription"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add pokemons"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state,
});
const mapDispatchToProps = (dispatch) => ({
  addPokemon: (data) => {
    dispatch({ type: "ADD_POKEMON", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
