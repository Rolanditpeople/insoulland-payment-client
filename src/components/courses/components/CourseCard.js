import React from 'react';
import { connect } from 'react-redux';
import VideoButton from './VideoButton';
import { chooseCourse } from './../../../redux/actions/CourseActions';
import { openModal } from './../../../redux/actions/ModalStateActions';
import timer from '../../common/timer.webp';
import user from '../../common/user.webp';
import group from '../../common/group.webp';
import tools from '../../common/tools.webp';
import book from '../../common/book.webp';
import price from '../../common/price.webp';
import calendar from '../../common/calendar.webp';
import increase from '../../common/increase.webp';
import other from '../../common/other.webp';
import './cards.css';

class CourseCard extends React.Component {
  constructor() {
    super();
    this.state = {
      playVideo: false
    }
  }

  playVideo = () => {
    this.setState({playVideo: true});
  };

  handleCourseClick = (course) => {
    this.props._chooseCourse(course);
    this.props._openModal();
  };

  render() {
    return (
      <div className={"card"} id={this.props.cardId}>
        <div className={"card-header h5"}>
          { this.props.title }
        </div>
        <div className={"card-body"}>
          {
            (() => {
              if (this.props.video) {
                return this.state.playVideo
                  ? <iframe className="mb-3" title={this.props.video.title} width="100%" height="250" src={"https://www.youtube.com/embed/" + this.props.video.youtubeId + "?autoplay=1"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  : <div className="video-player-min mb-3" id={this.props.video.thumbnailCssId} onClick={this.playVideo}></div>
              }
            })()
          }
          {
            this.props.img && !this.props.video
              ? <div className="course-list-img mb-3" id={this.props.img.cssId}></div>
              : null
          }
          {
            this.props.moreVideos
              ? <VideoButton videos={this.props.moreVideos} />
              : null
          }
          {
            this.props.classLength
              ? <p>
                  <img src={timer} alt="Időtartam" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span>
                  &nbsp;{this.props.classLength}
                </p>
              : null
          }
          {
            this.props.classSchedule
              ? <p>
                  <img src={calendar} alt="Szakkör időpontok" className={'box_icon'} />
                  <span className={'description_title'}>Szakkör időpontok:</span>
                  &nbsp;{this.props.classSchedule}
                </p>
              : null
          }
          {
            this.props.ageGroup
              ? <p>
                  <img src={user} alt="Korosztály" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span>
                  &nbsp;{this.props.ageGroup}
                </p>
              : null
          }
          {
            this.props.groupSize
              ? <p>
                  <img src={group} alt="Csoport létszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span>
                  &nbsp;{this.props.groupSize}
                </p>
              : null
          }
          {
            this.props.requirements
              ? <p>
                  <img src={tools} alt="Követelmény" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span>
                  &nbsp;{this.props.requirements}
                </p>
              : null
          }
          {
            this.props.thematics
              ? <p>
                  <img src={book} alt="Tematika" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span>
                  &nbsp;{this.props.thematics}
                </p>
              : null
          }
          {
            this.props.effects
              ? <p>
                  <img src={increase} alt="Pozitív hatások" className={'box_icon'} />
                  <span className={'description_title'}>Pozitív hatások:</span>
                  &nbsp;{this.props.effects}
                </p>
              : null
          }
          {
            this.props.others
              ? <p>
                  <img src={other} alt="Egyebek" className={'box_icon'} />
                  <span className={'description_title'}>Egyebek:</span>
                  &nbsp;{this.props.others}
                </p>
              : null
          }
          {
            this.props.price
              ? <p>
                  <img src={price} alt="Ár" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span>
                  &nbsp;{this.props.price}
                </p>
              : null
          }
          {
            this.props.highlightedInfo
              ? <p className="text-center text-danger font-weight-bold">
                  {this.props.highlightedInfo}
                </p>
              : null
          }
          <p className={"sign-up-button"}>
            {
              this.props.course
                ? <button className={"btn btn-lg btn-success"} onClick={() => {
                    this.handleCourseClick(this.props.course);
                  }}>Jelentkezési lap</button>
                : <button className={"btn btn-lg btn-success"} disabled>
                    Jelentkezési lap
                  </button>
            }
          </p>
        </div>
      </div>
    );
  }
}

const dispatcher = (dispatch) => ({
  _chooseCourse: (...args) => dispatch(chooseCourse(...args)),
  _openModal: (...args) => dispatch(openModal(...args))
});

export default connect(null, dispatcher)(CourseCard);
