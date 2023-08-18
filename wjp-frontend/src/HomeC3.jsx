import React from 'react';

function VideoCardHome3() {
  return (
    <>
    <div>
      <div className="container my-5 bg-body-tertiary">
        <div className="row p-3 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 text-dark">
              Time to Wake up to the grim reality and get our act together.......we have only one planet.
            </h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div className="col-lg-4 p-0">
            <video src="rotateEarth.mp4" autoPlay loop />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoCardHome3;
