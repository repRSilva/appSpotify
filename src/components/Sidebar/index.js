import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlaylist, Nav } from './styles';
import Loading from '../../components/Loading';
import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
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
				<div>
					<Nav main>
						<li>
							<Link to="/">Navegar</Link>
						</li>
						<li>
							<a href="#">Rádio</a>
						</li>
					</Nav>
					<Nav>
						<li>
							<span>Sua Biblioteca</span>
						</li>
						<li>
							<a href="#">Seu Daily Mix</a>
						</li>
						<li>
							<a href="#">Tocados Recentemente</a>
						</li>
					</Nav>
					<Nav>
						<li>
							<span>Playlists</span>
							{this.props.playlists.loading && <Loading />}
						</li>
						{this.props.playlists.data.map((playlist) => (
							<li key={playlist.id}>
								<Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
							</li>
						))}
					</Nav>
				</div>
				<NewPlaylist>
					<img src={AddPlayListIcon} alt="Adiconar Playlist" />Nova Playlist
				</NewPlaylist>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	playlists: state.playlists
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
