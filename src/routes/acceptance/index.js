import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
class Acceptance extends PureComponent {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          验收
        </NavBar>
      </div>
    )
  }
}

export default Acceptance;