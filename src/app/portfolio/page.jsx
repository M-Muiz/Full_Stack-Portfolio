import React from 'react'

const page = () => {
  return (
    
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}></motion.div>
  )
}

export default page
