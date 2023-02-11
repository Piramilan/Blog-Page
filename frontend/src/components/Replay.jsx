import React from 'react'

const Replay = () => {
  return (
           <div className="flex flex-col">
          <div className="flex flex-row space-x-2 items-center">
              <h3 className="font-bold text-xl">Hello Milan</h3>
              <p className="text-gray-500">13 Minutes Ago</p>
          </div>
          <div>
            <p>
              Jeepers now that's a huge release with some big community earnings to back it - it must be so rewarding seeing creators quit their day jobs after monetizing (with real MRR) on the new platform.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-2">
            <a href="#">Upvote</a>
            <a href="#">Reply</a>
          </div>
        </div>
  )
}

export default Replay