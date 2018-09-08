/*
 * @Author: gaofengjiao 
 * @Date: 2018-08-20 10:44:41 
 * @Last Modified by: wwb
 * @Last Modified time: 2018-09-08 12:01:03
 * 建设中页面
 */
import React, { PureComponent} from 'react';
import { Result, Icon, NavBar } from 'antd-mobile';
import { connect } from 'dva';
import styles from './result.css';
class ResultInfo extends PureComponent{
  render(){
    const { result } = this.props.match.params;
    const { history } = this.props;
    return(
      result ?
      <div>
        <NavBar
          mode="dark"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>
          ]}
          onLeftClick={() => history.go(-1)}
          >
          结果
        </NavBar>
        <Result
          img={<Icon type="check-circle" size='lg' className="spe" style={{ fill: '#f2a11c', }} />}
          title="上架成功"
          message={
            <div style={{ textAlign: 'center' }}>
                <p>上架单号: GD00015180700016ZJ</p>
                <p>上架时间: 2018-07-19 09:41:42</p>
            </div>
          }
        />
      </div>
      :
      <div>
        {/* <img src={require("../../assets/image/construction.svg")}  alt="正在建设中" className={styles.imgInfo}/> */}
        <h3 className={styles.title}>页面正在建设中...</h3>
      </div>
    )
  }
}

export default connect(state => state)(ResultInfo);
