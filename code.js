const repoName = $node["Github Trigger"].json.body.repository.name;
const pusherName = $node["Github Trigger"].json.body.pusher.name;
const commitMessage = $node["Github Trigger"].json.body.head_commit.message;
const repoUrl = $node["Github Trigger"].json.body.repository.url;

const message = `코드가 푸쉬 되었습니다.
저장소 : ${repoName}
푸쉬 사용자 : ${pusherName}
커밋 메시지 : ${commitMessage}

바로가기 : ${repoUrl}`;

// n8n의 Code 노드는 return할 때 [{ json: { ... } }] 구조여야 다음 노드에서 사용 가능
return [
  {
    json: {
      text: message,
    },
  },
];
