/* eslint-disable no-await-in-loop */
import '@nomiclabs/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import Deployer from '../test/helpers/deployer';
import { Multicast } from '../typechain';

task('deploy', 'Deploy multi cast contract').setAction(async (_taskArgs: any, hre: HardhatRuntimeEnvironment) => {
  const accounts = await hre.ethers.getSigners();
  console.log(
    'Deployer is:',
    accounts[0].address,
    accounts.map((e) => e.address),
  );
  const deployer: Deployer = Deployer.getInstance(hre);
  deployer.connect(accounts[0]);
  <Multicast>await deployer.contractDeploy('Orochi/Multicast', []);
  deployer.printReport();
});

export default {};
