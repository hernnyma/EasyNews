import * as userServices from '../../utilities/users-service'

export default function UserArticlesPage() {

  async function handleCheckToken() {
    let expDate = userServices.checkToken()
    console.log(expDate)
  }

    return (
      <div className="UserArticlesPage">
        <h1>UserArticlesPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </div>
    );
  }