/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, ReposAPIClient } from './repos-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedReposAPIClient extends ReposAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo> {
    return super.getReposOwnerRepo(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepo(res) || console.error(`TypeGuard for response 'repo' caught inconsistency.`, res)));
  }

  patchReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoEdit,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo> {
    return super.patchReposOwnerRepo(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepo(res) || console.error(`TypeGuard for response 'repo' caught inconsistency.`, res)));
  }

  getReposOwnerRepoAssignees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Assignees> {
    return super.getReposOwnerRepoAssignees(args, requestHttpOptions)
      .pipe(tap((res) => guards.isassignees(res) || console.error(`TypeGuard for response 'assignees' caught inconsistency.`, res)));
  }

  getReposOwnerRepoBranches(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Branches> {
    return super.getReposOwnerRepoBranches(args, requestHttpOptions)
      .pipe(tap((res) => guards.isbranches(res) || console.error(`TypeGuard for response 'branches' caught inconsistency.`, res)));
  }

  getReposOwnerRepoBranchesBranch(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      branch: string,  // Name of the branch.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Branch> {
    return super.getReposOwnerRepoBranchesBranch(args, requestHttpOptions)
      .pipe(tap((res) => guards.isbranch(res) || console.error(`TypeGuard for response 'branch' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCollaborators(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getReposOwnerRepoCollaborators(args, requestHttpOptions)
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
  }

  getReposOwnerRepoComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments> {
    return super.getReposOwnerRepoComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepoComments(res) || console.error(`TypeGuard for response 'repoComments' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments> {
    return super.getReposOwnerRepoCommentsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommitComments(res) || console.error(`TypeGuard for response 'commitComments' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments> {
    return super.patchReposOwnerRepoCommentsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommitComments(res) || console.error(`TypeGuard for response 'commitComments' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      sha?: string,  // (optional) Sha or branch to start listing commits from.
      path?: string,  // (optional) Only commits containing this file path will be returned.
      author?: string,  // (optional) GitHub login, name, or email by which to filter by commit author.
      until?: string,  // (optional) ISO 8601 Date - Only commits before this date will be returned.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commits> {
    return super.getReposOwnerRepoCommits(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommits(res) || console.error(`TypeGuard for response 'commits' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCommitsRefStatus(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RefStatus> {
    return super.getReposOwnerRepoCommitsRefStatus(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrefStatus(res) || console.error(`TypeGuard for response 'refStatus' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commit> {
    return super.getReposOwnerRepoCommitsShaCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommit(res) || console.error(`TypeGuard for response 'commit' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments> {
    return super.getReposOwnerRepoCommitsShaCodeComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepoComments(res) || console.error(`TypeGuard for response 'repoComments' caught inconsistency.`, res)));
  }

  postReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments> {
    return super.postReposOwnerRepoCommitsShaCodeComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommitComments(res) || console.error(`TypeGuard for response 'commitComments' caught inconsistency.`, res)));
  }

  getReposOwnerRepoCompareBaseIdHeadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      baseId: string,
      headId: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CompareCommits> {
    return super.getReposOwnerRepoCompareBaseIdHeadId(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscompare-commits(res) || console.error(`TypeGuard for response 'compare-commits' caught inconsistency.`, res)));
  }

  deleteReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeleteFileBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteFile> {
    return super.deleteReposOwnerRepoContentsPath(args, requestHttpOptions)
      .pipe(tap((res) => guards.isdeleteFile(res) || console.error(`TypeGuard for response 'deleteFile' caught inconsistency.`, res)));
  }

  getReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      queryPath?: string,  // (optional) The content path.
      ref?: string,  // (optional) The String name of the Commit/Branch/Tag. Defaults to 'master'.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath> {
    return super.getReposOwnerRepoContentsPath(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscontents-path(res) || console.error(`TypeGuard for response 'contents-path' caught inconsistency.`, res)));
  }

  putReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CreateFileBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateFile> {
    return super.putReposOwnerRepoContentsPath(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscreateFile(res) || console.error(`TypeGuard for response 'createFile' caught inconsistency.`, res)));
  }

  getReposOwnerRepoContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      anon: string,  // Set to 1 or true to include anonymous contributors in results.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Contributors> {
    return super.getReposOwnerRepoContributors(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscontributors(res) || console.error(`TypeGuard for response 'contributors' caught inconsistency.`, res)));
  }

  getReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoDeployments> {
    return super.getReposOwnerRepoDeployments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepo-deployments(res) || console.error(`TypeGuard for response 'repo-deployments' caught inconsistency.`, res)));
  }

  postReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Deployment,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeploymentResp> {
    return super.postReposOwnerRepoDeployments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isdeployment-resp(res) || console.error(`TypeGuard for response 'deployment-resp' caught inconsistency.`, res)));
  }

  getReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: number,  // The Deployment ID to list the statuses from.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeploymentStatuses> {
    return super.getReposOwnerRepoDeploymentsIdStatuses(args, requestHttpOptions)
      .pipe(tap((res) => guards.isdeployment-statuses(res) || console.error(`TypeGuard for response 'deployment-statuses' caught inconsistency.`, res)));
  }

  getReposOwnerRepoDownloads(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads> {
    return super.getReposOwnerRepoDownloads(args, requestHttpOptions)
      .pipe(tap((res) => guards.isdownloads(res) || console.error(`TypeGuard for response 'downloads' caught inconsistency.`, res)));
  }

  getReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      downloadId: number,  // Id of download.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads> {
    return super.getReposOwnerRepoDownloadsDownloadId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isdownloads(res) || console.error(`TypeGuard for response 'downloads' caught inconsistency.`, res)));
  }

  getReposOwnerRepoEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events> {
    return super.getReposOwnerRepoEvents(args, requestHttpOptions)
      .pipe(tap((res) => guards.isevents(res) || console.error(`TypeGuard for response 'events' caught inconsistency.`, res)));
  }

  getReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      sort?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Forks> {
    return super.getReposOwnerRepoForks(args, requestHttpOptions)
      .pipe(tap((res) => guards.isforks(res) || console.error(`TypeGuard for response 'forks' caught inconsistency.`, res)));
  }

  postReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ForkBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Fork> {
    return super.postReposOwnerRepoForks(args, requestHttpOptions)
      .pipe(tap((res) => guards.isfork(res) || console.error(`TypeGuard for response 'fork' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: Blob,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blobs> {
    return super.postReposOwnerRepoGitBlobs(args, requestHttpOptions)
      .pipe(tap((res) => guards.isblobs(res) || console.error(`TypeGuard for response 'blobs' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitBlobsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Blob> {
    return super.getReposOwnerRepoGitBlobsShaCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.isblob(res) || console.error(`TypeGuard for response 'blob' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoCommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GitCommit> {
    return super.postReposOwnerRepoGitCommits(args, requestHttpOptions)
      .pipe(tap((res) => guards.isgitCommit(res) || console.error(`TypeGuard for response 'gitCommit' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoCommit> {
    return super.getReposOwnerRepoGitCommitsShaCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepoCommit(res) || console.error(`TypeGuard for response 'repoCommit' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Refs> {
    return super.getReposOwnerRepoGitRefs(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrefs(res) || console.error(`TypeGuard for response 'refs' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RefsBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch> {
    return super.postReposOwnerRepoGitRefs(args, requestHttpOptions)
      .pipe(tap((res) => guards.isheadBranch(res) || console.error(`TypeGuard for response 'headBranch' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch> {
    return super.getReposOwnerRepoGitRefsRef(args, requestHttpOptions)
      .pipe(tap((res) => guards.isheadBranch(res) || console.error(`TypeGuard for response 'headBranch' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.GitRefPatch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch> {
    return super.patchReposOwnerRepoGitRefsRef(args, requestHttpOptions)
      .pipe(tap((res) => guards.isheadBranch(res) || console.error(`TypeGuard for response 'headBranch' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tag,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tags> {
    return super.postReposOwnerRepoGitTags(args, requestHttpOptions)
      .pipe(tap((res) => guards.istags(res) || console.error(`TypeGuard for response 'tags' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitTagsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tag> {
    return super.getReposOwnerRepoGitTagsShaCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.istag(res) || console.error(`TypeGuard for response 'tag' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitTrees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tree,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Trees> {
    return super.postReposOwnerRepoGitTrees(args, requestHttpOptions)
      .pipe(tap((res) => guards.istrees(res) || console.error(`TypeGuard for response 'trees' caught inconsistency.`, res)));
  }

  getReposOwnerRepoGitTreesShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // Tree SHA.
      recursive?: number,  // (optional) Get a Tree Recursively. (0 or 1)
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tree> {
    return super.getReposOwnerRepoGitTreesShaCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.istree(res) || console.error(`TypeGuard for response 'tree' caught inconsistency.`, res)));
  }

  getReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook> {
    return super.getReposOwnerRepoHooks(args, requestHttpOptions)
      .pipe(tap((res) => guards.ishook(res) || console.error(`TypeGuard for response 'hook' caught inconsistency.`, res)));
  }

  postReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook> {
    return super.postReposOwnerRepoHooks(args, requestHttpOptions)
      .pipe(tap((res) => guards.ishook(res) || console.error(`TypeGuard for response 'hook' caught inconsistency.`, res)));
  }

  getReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook> {
    return super.getReposOwnerRepoHooksHookId(args, requestHttpOptions)
      .pipe(tap((res) => guards.ishook(res) || console.error(`TypeGuard for response 'hook' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook> {
    return super.patchReposOwnerRepoHooksHookId(args, requestHttpOptions)
      .pipe(tap((res) => guards.ishook(res) || console.error(`TypeGuard for response 'hook' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      filter: string,  // Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see 
      state: string,
      labels: string,  // String list of comma separated Label names. Example - bug,ui,@high.
      sort: string,
      direction: string,
      since?: string,  // (optional) Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issues> {
    return super.getReposOwnerRepoIssues(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissues(res) || console.error(`TypeGuard for response 'issues' caught inconsistency.`, res)));
  }

  postReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue> {
    return super.postReposOwnerRepoIssues(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissue(res) || console.error(`TypeGuard for response 'issue' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    return super.getReposOwnerRepoIssuesComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComments(res) || console.error(`TypeGuard for response 'issuesComments' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment> {
    return super.getReposOwnerRepoIssuesCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComment(res) || console.error(`TypeGuard for response 'issuesComment' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoIssuesCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment> {
    return super.patchReposOwnerRepoIssuesCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComment(res) || console.error(`TypeGuard for response 'issuesComment' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events> {
    return super.getReposOwnerRepoIssuesEvents(args, requestHttpOptions)
      .pipe(tap((res) => guards.isevents(res) || console.error(`TypeGuard for response 'events' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesEventId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      eventId: number,  // Id of the event.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Event> {
    return super.getReposOwnerRepoIssuesEventId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isevent(res) || console.error(`TypeGuard for response 'event' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue> {
    return super.getReposOwnerRepoIssuesNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissue(res) || console.error(`TypeGuard for response 'issue' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue> {
    return super.patchReposOwnerRepoIssuesNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissue(res) || console.error(`TypeGuard for response 'issue' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    return super.getReposOwnerRepoIssuesNumberComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComments(res) || console.error(`TypeGuard for response 'issuesComments' caught inconsistency.`, res)));
  }

  postReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment> {
    return super.postReposOwnerRepoIssuesNumberComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComment(res) || console.error(`TypeGuard for response 'issuesComment' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesNumberEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events> {
    return super.getReposOwnerRepoIssuesNumberEvents(args, requestHttpOptions)
      .pipe(tap((res) => guards.isevents(res) || console.error(`TypeGuard for response 'events' caught inconsistency.`, res)));
  }

  getReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels> {
    return super.getReposOwnerRepoIssuesNumberLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabels(res) || console.error(`TypeGuard for response 'labels' caught inconsistency.`, res)));
  }

  postReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label> {
    return super.postReposOwnerRepoIssuesNumberLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabel(res) || console.error(`TypeGuard for response 'label' caught inconsistency.`, res)));
  }

  putReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label> {
    return super.putReposOwnerRepoIssuesNumberLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabel(res) || console.error(`TypeGuard for response 'label' caught inconsistency.`, res)));
  }

  getReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Keys> {
    return super.getReposOwnerRepoKeys(args, requestHttpOptions)
      .pipe(tap((res) => guards.iskeys(res) || console.error(`TypeGuard for response 'keys' caught inconsistency.`, res)));
  }

  postReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    return super.postReposOwnerRepoKeys(args, requestHttpOptions)
      .pipe(tap((res) => guards.isuser-keys-keyId(res) || console.error(`TypeGuard for response 'user-keys-keyId' caught inconsistency.`, res)));
  }

  getReposOwnerRepoKeysKeyId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      keyId: number,  // Id of key.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    return super.getReposOwnerRepoKeysKeyId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isuser-keys-keyId(res) || console.error(`TypeGuard for response 'user-keys-keyId' caught inconsistency.`, res)));
  }

  getReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels> {
    return super.getReposOwnerRepoLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabels(res) || console.error(`TypeGuard for response 'labels' caught inconsistency.`, res)));
  }

  postReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label> {
    return super.postReposOwnerRepoLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabel(res) || console.error(`TypeGuard for response 'label' caught inconsistency.`, res)));
  }

  getReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label> {
    return super.getReposOwnerRepoLabelsName(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabel(res) || console.error(`TypeGuard for response 'label' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label> {
    return super.patchReposOwnerRepoLabelsName(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabel(res) || console.error(`TypeGuard for response 'label' caught inconsistency.`, res)));
  }

  getReposOwnerRepoLanguages(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Languages> {
    return super.getReposOwnerRepoLanguages(args, requestHttpOptions)
      .pipe(tap((res) => guards.islanguages(res) || console.error(`TypeGuard for response 'languages' caught inconsistency.`, res)));
  }

  postReposOwnerRepoMerges(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergesBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.MergesSuccessful> {
    return super.postReposOwnerRepoMerges(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismergesSuccessful(res) || console.error(`TypeGuard for response 'mergesSuccessful' caught inconsistency.`, res)));
  }

  getReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: string,  // (optional) String to filter by state.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone> {
    return super.getReposOwnerRepoMilestones(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismilestone(res) || console.error(`TypeGuard for response 'milestone' caught inconsistency.`, res)));
  }

  postReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone> {
    return super.postReposOwnerRepoMilestones(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismilestone(res) || console.error(`TypeGuard for response 'milestone' caught inconsistency.`, res)));
  }

  getReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone> {
    return super.getReposOwnerRepoMilestonesNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismilestone(res) || console.error(`TypeGuard for response 'milestone' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone> {
    return super.patchReposOwnerRepoMilestonesNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismilestone(res) || console.error(`TypeGuard for response 'milestone' caught inconsistency.`, res)));
  }

  getReposOwnerRepoMilestonesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels> {
    return super.getReposOwnerRepoMilestonesNumberLabels(args, requestHttpOptions)
      .pipe(tap((res) => guards.islabels(res) || console.error(`TypeGuard for response 'labels' caught inconsistency.`, res)));
  }

  getReposOwnerRepoNotifications(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      all?: boolean,  // (optional) True to show notifications marked as read.
      participating?: boolean,  // (optional) True to show only notifications in which the user is directly participating or mentioned. 
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications> {
    return super.getReposOwnerRepoNotifications(args, requestHttpOptions)
      .pipe(tap((res) => guards.isnotifications(res) || console.error(`TypeGuard for response 'notifications' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: string,  // (optional) String to filter by state.
      head?: string,  // (optional) Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format. 
      base?: string,  // (optional) Filter pulls by base branch name. Example - gh-pages.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls> {
    return super.getReposOwnerRepoPulls(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispulls(res) || console.error(`TypeGuard for response 'pulls' caught inconsistency.`, res)));
  }

  postReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls> {
    return super.postReposOwnerRepoPulls(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispulls(res) || console.error(`TypeGuard for response 'pulls' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    return super.getReposOwnerRepoPullsComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isissuesComments(res) || console.error(`TypeGuard for response 'issuesComments' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    return super.getReposOwnerRepoPullsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispullsComment(res) || console.error(`TypeGuard for response 'pullsComment' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoPullsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    return super.patchReposOwnerRepoPullsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispullsComment(res) || console.error(`TypeGuard for response 'pullsComment' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullRequest> {
    return super.getReposOwnerRepoPullsNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispullRequest(res) || console.error(`TypeGuard for response 'pullRequest' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo> {
    return super.patchReposOwnerRepoPullsNumber(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrepo(res) || console.error(`TypeGuard for response 'repo' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    return super.getReposOwnerRepoPullsNumberComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispullsComment(res) || console.error(`TypeGuard for response 'pullsComment' caught inconsistency.`, res)));
  }

  postReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsCommentPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    return super.postReposOwnerRepoPullsNumberComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispullsComment(res) || console.error(`TypeGuard for response 'pullsComment' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsNumberCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commits> {
    return super.getReposOwnerRepoPullsNumberCommits(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommits(res) || console.error(`TypeGuard for response 'commits' caught inconsistency.`, res)));
  }

  getReposOwnerRepoPullsNumberFiles(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls> {
    return super.getReposOwnerRepoPullsNumberFiles(args, requestHttpOptions)
      .pipe(tap((res) => guards.ispulls(res) || console.error(`TypeGuard for response 'pulls' caught inconsistency.`, res)));
  }

  putReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergePullBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Merge> {
    return super.putReposOwnerRepoPullsNumberMerge(args, requestHttpOptions)
      .pipe(tap((res) => guards.ismerge(res) || console.error(`TypeGuard for response 'merge' caught inconsistency.`, res)));
  }

  getReposOwnerRepoReadme(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref?: string,  // (optional) The String name of the Commit/Branch/Tag. Defaults to master.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath> {
    return super.getReposOwnerRepoReadme(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscontents-path(res) || console.error(`TypeGuard for response 'contents-path' caught inconsistency.`, res)));
  }

  getReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Releases> {
    return super.getReposOwnerRepoReleases(args, requestHttpOptions)
      .pipe(tap((res) => guards.isreleases(res) || console.error(`TypeGuard for response 'releases' caught inconsistency.`, res)));
  }

  postReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release> {
    return super.postReposOwnerRepoReleases(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrelease(res) || console.error(`TypeGuard for response 'release' caught inconsistency.`, res)));
  }

  getReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset> {
    return super.getReposOwnerRepoReleasesAssetsId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isasset(res) || console.error(`TypeGuard for response 'asset' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.AssetPatch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset> {
    return super.patchReposOwnerRepoReleasesAssetsId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isasset(res) || console.error(`TypeGuard for response 'asset' caught inconsistency.`, res)));
  }

  getReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release> {
    return super.getReposOwnerRepoReleasesId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrelease(res) || console.error(`TypeGuard for response 'release' caught inconsistency.`, res)));
  }

  patchReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release> {
    return super.patchReposOwnerRepoReleasesId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isrelease(res) || console.error(`TypeGuard for response 'release' caught inconsistency.`, res)));
  }

  getReposOwnerRepoReleasesIdAssets(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Assets> {
    return super.getReposOwnerRepoReleasesIdAssets(args, requestHttpOptions)
      .pipe(tap((res) => guards.isassets(res) || console.error(`TypeGuard for response 'assets' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStargazers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getReposOwnerRepoStargazers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatsCodeFrequency(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats> {
    return super.getReposOwnerRepoStatsCodeFrequency(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscodeFrequencyStats(res) || console.error(`TypeGuard for response 'codeFrequencyStats' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatsCommitActivity(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitActivityStats> {
    return super.getReposOwnerRepoStatsCommitActivity(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscommitActivityStats(res) || console.error(`TypeGuard for response 'commitActivityStats' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatsContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContributorsStats> {
    return super.getReposOwnerRepoStatsContributors(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscontributorsStats(res) || console.error(`TypeGuard for response 'contributorsStats' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatsParticipation(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ParticipationStats> {
    return super.getReposOwnerRepoStatsParticipation(args, requestHttpOptions)
      .pipe(tap((res) => guards.isparticipationStats(res) || console.error(`TypeGuard for response 'participationStats' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatsPunchCard(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats> {
    return super.getReposOwnerRepoStatsPunchCard(args, requestHttpOptions)
      .pipe(tap((res) => guards.iscodeFrequencyStats(res) || console.error(`TypeGuard for response 'codeFrequencyStats' caught inconsistency.`, res)));
  }

  getReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Ref> {
    return super.getReposOwnerRepoStatusesRef(args, requestHttpOptions)
      .pipe(tap((res) => guards.isref(res) || console.error(`TypeGuard for response 'ref' caught inconsistency.`, res)));
  }

  postReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HeadBranch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Ref> {
    return super.postReposOwnerRepoStatusesRef(args, requestHttpOptions)
      .pipe(tap((res) => guards.isref(res) || console.error(`TypeGuard for response 'ref' caught inconsistency.`, res)));
  }

  getReposOwnerRepoSubscribers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getReposOwnerRepoSubscribers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
  }

  getReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition> {
    return super.getReposOwnerRepoSubscription(args, requestHttpOptions)
      .pipe(tap((res) => guards.issubscribition(res) || console.error(`TypeGuard for response 'subscribition' caught inconsistency.`, res)));
  }

  putReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.SubscribitionBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition> {
    return super.putReposOwnerRepoSubscription(args, requestHttpOptions)
      .pipe(tap((res) => guards.issubscribition(res) || console.error(`TypeGuard for response 'subscribition' caught inconsistency.`, res)));
  }

  getReposOwnerRepoTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tags> {
    return super.getReposOwnerRepoTags(args, requestHttpOptions)
      .pipe(tap((res) => guards.istags(res) || console.error(`TypeGuard for response 'tags' caught inconsistency.`, res)));
  }

  getReposOwnerRepoTeams(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Teams> {
    return super.getReposOwnerRepoTeams(args, requestHttpOptions)
      .pipe(tap((res) => guards.isteams(res) || console.error(`TypeGuard for response 'teams' caught inconsistency.`, res)));
  }

  getReposOwnerRepoWatchers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getReposOwnerRepoWatchers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
  }

}
