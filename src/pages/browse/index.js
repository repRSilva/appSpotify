import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, Title, List, Playlist } from './styles';
import Loading from '../../components/Loading';

class Browse extends Component {
	static propTypes = {
		getPlaylistsRequest: PropTypes.func.isRequired,
		playlists: PropTypes.shape({
			data: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					title: PropTypes.string
				})
			),
			loading: PropTypes.bool
		}).isRequired
	};

	componentDidMount() {
		this.props.getPlaylistsRequest();
	}

	render() {
		return (
			<Container>
				<Title>Navegar {this.props.playlists.loading && <Loading />}</Title>

				<List>
					{this.props.playlists.data.map((playlist) => (
						<Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
							<img src={playlist.thumbnail} alt={playlist.title} />
							<strong>{playlist.title}</strong>
							<p>{playlist.description}</p>
						</Playlist>
					))}
				</List>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	playlists: state.playlists
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
