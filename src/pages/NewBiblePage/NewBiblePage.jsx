import './NewBiblePage.css'

import NewBibleForm from '../../components/BiblesComponents/NewBibleForm/NewBibleForm'

const NewBiblePage = () => {
    return (

        <div className='createPage'>

            <h1>New Post</h1>
            <hr />
            <NewBibleForm />
        </div>
    )
}

export default NewBiblePage