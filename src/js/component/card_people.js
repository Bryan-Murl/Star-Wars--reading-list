import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const CardPeople = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-sm-3 mt-2">
			<div className="card">
				<img
					className="card-img-top w-100"
					src="https://cogconnected.com/wp-content/uploads/2020/11/star-wars-4th-may-kt-1280x720-min-700x394.jpg"
					alt=""
				/>
				<div className="card-body">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">{props.name}</h5>
						</div>
						<div className="d-flex flex-column p-1">
							<p className="p-1">
								Gender: {props.gender}
								<br />
								Hair Color: {props.hairColor}
								<br />
								Eye Color: {props.eyeColor}
							</p>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<Link to={"/personprofile/" + props.id}>
								<button type="button" className="btn btn-warning text-white">
									Learn More
								</button>
							</Link>
						</div>
						<div>
							<button
								type="button"
								className="btn btn-info"
								aria-hidden="true"
								onClick={() => actions.addFavorites(props.name)}>
								<BsStarFill aria-pressed="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardPeople.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string
};

export default CardPeople;
