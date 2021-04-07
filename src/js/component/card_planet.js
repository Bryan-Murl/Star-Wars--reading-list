import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const CardPlanet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-sm-3 mt-2">
			<div className="card">
				<img
					className="card/-img-top w-100"
					src="https://www.denofgeek.com/wp-content/uploads/2019/08/death-star.jpg?resize=768%2C432"
					alt="Card image planets"
				/>
				<div className="card-body">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">{props.name}</h5>
						</div>
						<div className="d-flex flex-column p-0">
							<p className="p-0">
								Population: {props.population}
								<br />
								Terrain: {props.terrain}
							</p>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<Link to={"/planetprofile/" + props.id}>
								<button type="button" className="btn btn-warning text-white">
									Learn More
								</button>
							</Link>
						</div>
						<div>
							<button
								type="button"
								className="btn btn-info"
								onClick={() => actions.addFavorites(props.name)}>
								<BsStarFill />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string
};

export default CardPlanet;
