import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
	renderSubtitle() {
		if(this.props.subtitle) {
			return <h3 className="subtitle">{this.props.subtitle}</h3>;
		}
	}
	render() {
		return (
			<div>
				<div className="title-bar">
					<div className="wrapper">
						<h1>{this.props.title}</h1>
						{this.renderSubtitle()}
					</div>
				</div>
			</div>
		)
	}
}

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

// TitleBar.defaultProps = {
// 	title: 'Score Keep'
// };