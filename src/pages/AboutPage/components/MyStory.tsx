import React from 'react'

export default function MyStory() {
  return (
    <div>
      <h2 className="font-regular pb-3 font-head text-2xl underline underline-offset-auto decoration-wavy decoration-indigo-500">My story</h2>
        <div className="text-1xl font-body">
          <p>I've always loved problem solving. It's been the common thread
          throughout all of the different career paths I've taken. I enjoy
          trying things I've never tried before, jumping into projects and
          taking no issue in making mistakes.</p>
          <br></br>
          <p>Here's a GIF of me lituraly jumping into something I'd only been
          learning for an hour:</p>
          <br></br>
          {/* <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/kf4WRWkapfk"></iframe> */}
          <img src="/images/about-page.gif" className="w-full"/>
          <br></br>   
          <p>If you're not convinced by that, in September 2022 I took another jump
          into something that I'd been wanting to tackel for years, coding.
          Throughout my different careers I've been interested in learning how
          to code but lack of time and fear of wasted time was a constant
          barrier faced.</p>
          <br></br>
          <p>After setting up a gardening business in January 2022 I was given a
          window in the winter period to set my tools aside and embarked on a
          journey into code through the School of Code bootcamp. Out of 2000
          applications, a rigorous interview process and the most intense 16
          weeks of my life I can readily say that I'm feeling more than ready to
          begin a new career as a Software Developer.</p>
        </div>
    </div>
  )
}
