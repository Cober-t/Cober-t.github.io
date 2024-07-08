import { Contact, Hero } from '.';
import { toolsContentBranchesPath, ChangeBranch } from '../constants';


const Home = () => {

	return (

		<section className="relative z-0 bg-backgroundColor select-none">

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center
			overflow-scroll no-scrollbar">
				<Hero />
			</div>

			{/* <div>
				{toolsContentBranchesPath.map((link) => (
					<ChangeBranch to={`${link.id}`} key={link.id + "Home"} className={`${link.style}`}>
						{link.title}
						<hr className="list-none h-px mb-10 mt-2 bg-black-100 border-0"></hr>
					</ChangeBranch>
				))}
			</div>


			<div className='py-[100px]'/> */}

			{/* <div className="relative z-0 bg-contactColor">
				<Contact />
			</div> */}
			
		</section>
	)
}


export default Home