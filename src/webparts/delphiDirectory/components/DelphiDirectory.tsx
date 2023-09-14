import * as React from 'react';
import styles from './DelphiDirectory.module.scss';
import { IDelphiDirectoryProps } from './IDelphiDirectoryProps';
import DirectoryHook from './DirectoryHook';

export default class DelphiDirectory extends React.Component<IDelphiDirectoryProps, {}> {
  public render(): React.ReactElement<IDelphiDirectoryProps> {
    return (
      <section className={styles.delphiDirectory}>
        <DirectoryHook context={this.props.context} displayMode={this.props.displayMode}
          searchFirstName={this.props.searchFirstName}
          title={this.props.title} updateProperty={this.props.updateProperty}
          children={this.props.children} clearTextSearchProps={this.props.clearTextSearchProps}
          pageSize={this.props.pageSize} searchProps={this.props.searchProps}
          useSpaceBetween={this.props.useSpaceBetween} />
      </section>
    );
  }
}
