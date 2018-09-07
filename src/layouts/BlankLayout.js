import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import { connect } from 'dva';
import styles from './style.css';
class BlankLayout extends PureComponent {
  render() {
    const { getRouteData } = this.props;
    return (
      <div className={`${styles.content}`}>
        <Switch>
          <Redirect from="/" to="/login" exact={true}/>
          {
            getRouteData('BlankLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
          <Route component={() => <div>404</div>} />
        </Switch>
      </div>
    )
  }
}
export default connect(state => state)(BlankLayout);