import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 2,
      userInfo:{
         name:"Dummy",
        url:"dummy",
        avatar_url:"http://api.github.com/users/manas3581"
      }
    };
  }

  async componentDidMount(){
// Api call
    const data = await fetch("http://api.github.com/users/manas3581")
    const json=await data.json();

    this.setState({
      userInfo:json,
    });
    console.log(json)
  }

  render() {
    const { name, url,avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;
    return (
      <div className="user-card"> 
      <img src={avatar_url} alt=""  />
        <h2>Name:{name} </h2>
        <h5>Contact:{url}</h5> 
        {/* <h5>
          {" "}
          Count:
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
                count2: count2 + 1,
              });
            }}
          >
            {count}
          </button>
        </h5>
        <h5>Count2:{count2}</h5> */}
      </div>
    );
  }
}
export default UserClass;
