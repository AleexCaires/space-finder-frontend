import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService'
import { Login } from './Login'

interface AppState{
  user: User | undefined 
}

export class App extends React.Component<{}, AppState>{

  private authService: AuthService = new AuthService();

  constructor(props: any){
    super(props)

    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User){
    this.setState({
      user: user
    })
    console.log('Setting the User!' + user);
  }

  render(){
    return (
      <div>App from class
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    )
  }
} 
