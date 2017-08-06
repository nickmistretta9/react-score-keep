import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
	render() {
		let itemClassName = `item position-${this.props.player.rank}`;
		return (
			<div className={itemClassName} key={this.props.player._id}>
				<div className="player">
					<div>
						<h3 className="name">{this.props.player.name}</h3>
						<p className="stats">{this.props.player.position} place - {this.props.player.score} point(s)</p>
					</div>
					<div className="actions">
						<button className="button button--round" onClick={() => Players.update(
							this.props.player._id, {$inc: {score: -1}})}>-1
						</button>
						<button className="button button--round" onClick={() => Players.update(
							this.props.player._id, {$inc: {score: 1}})}>+1
						</button>
						<button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
					</div>
				</div>
			</div>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
}