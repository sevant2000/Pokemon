import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ pokemons, deletePokemon }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Pokemon
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Breed</th>
                <th scope="col">Discription</th>
                <th scope="col">Update/Remove Section</th>
                
              </tr>
            </thead>
            <tbody>
              {pokemons.length > 0 ? (
                pokemons.map((Pokemon, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{Pokemon.name}</td>
                    <td>{Pokemon.breed}</td>
                    <td>{Pokemon.desc}</td>
                    <td>
                      <Link
                        to={`/edit/${Pokemon.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Update
                      </Link>
                      <button
                        type="button"
                        onClick={() => deletePokemon(Pokemon.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Pokemon Found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state,
});

const mapDispatchToProps = (dispatch) => ({
  deletePokemon: (id) => {
    dispatch({ type: "DELETE_POKEMON", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
