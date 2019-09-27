import React from 'react'
import Ban from '../Asset/Ban'
import JsonView from '../Asset/JsonView'
import Ftr from '../Asset/Footer'
function Home(){
	return(
		<div className="HomePage">
		<Ban/>
		<JsonView />
		<Ftr/>
		</div>
		)
}
export default Home