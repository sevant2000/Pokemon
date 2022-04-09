import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditPokemon = ({ pokemons, updatePokemon }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentPokemon = pokemons.find(
    (Pokemon) => Pokemon.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentPokemon.name);
    setbreed(currentPokemon.breed);
    setdesc(currentPokemon.desc);
  }, [currentPokemon]);

  const [name, setName] = useState("");
  const [breed, setbreed] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!breed || !name || !desc) {
      return toast.warning("Please fill in all fields!!");
    }
    

    const data = {
      id: currentPokemon.id,
      breed,
      name,
      desc,
    };

    updatePokemon(data);
    toast.success("Pokemon updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentPokemon ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={breed}
                  placeholder={"breed"}
                  onChange={(e) => setbreed(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={desc}
                  placeholder={"desc"}
                  onChange={(e) => setdesc(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Pokemon
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Pokemon Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state,
});
const mapDispatchToProps = (dispatch) => ({
  updatePokemon: (data) => {
    dispatch({ type: "UPDATE_POKEMON", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPokemon);
