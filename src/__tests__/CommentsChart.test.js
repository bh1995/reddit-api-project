import React from 'react';
import { render } from '@testing-library/react';
import CommentsChart from '../commentsChart';

// Mock react-chartjs-2 Bar component
jest.mock('react-chartjs-2', () => ({
  Bar: () => <div>Mock Bar Chart</div>
}));

describe('CommentsChart Component', () => {
  test('renders bar chart', () => {
    const mockData = {
      data: {
        children: [
          // some mock Reddit data
            {
               "kind":"t1",
               "data":{
                  "subreddit_id":"t5_2rnba",
                  "approved_at_utc":null,
                  "author_is_blocked":false,
                  "comment_type":null,
                  "link_title":"Vi pr\u00f8ver igen! Mit urs pynt er faldet af da det endte i vaskemaskinen. Er der nogen der kender et sted man kunne f\u00e5 det erstattet?",
                  "mod_reason_by":null,
                  "banned_by":null,
                  "ups":1,
                  "num_reports":null,
                  "author_flair_type":"text",
                  "total_awards_received":0,
                  "subreddit":"odense",
                  "link_author":"ExternalCommon8854",
                  "likes":true,
                  "replies":"",
                  "user_reports":[
                     
                  ],
                  "saved":false,
                  "id":"k96vgbz",
                  "banned_at_utc":null,
                  "mod_reason_title":null,
                  "gilded":0,
                  "archived":false,
                  "collapsed_reason_code":null,
                  "no_follow":false,
                  "author":"FeatureIll729",
                  "num_comments":49,
                  "can_mod_post":false,
                  "send_replies":true,
                  "parent_id":"t3_17tndfx",
                  "score":1,
                  "author_fullname":"t2_aavo8kc9",
                  "over_18":false,
                  "report_reasons":null,
                  "removal_reason":null,
                  "approved_by":null,
                  "controversiality":0,
                  "body":"cool",
                  "edited":false,
                  "top_awarded_type":null,
                  "downs":0,
                  "author_flair_css_class":null,
                  "is_submitter":false,
                  "collapsed":false,
                  "author_flair_richtext":[
                     
                  ],
                  "author_patreon_flair":false,
                  "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;cool&lt;/p&gt;\n&lt;/div&gt;",
                  "gildings":{
                     
                  },
                  "collapsed_reason":null,
                  "distinguished":null,
                  "associated_award":null,
                  "stickied":false,
                  "author_premium":false,
                  "can_gild":false,
                  "link_id":"t3_17tndfx",
                  "unrepliable_reason":null,
                  "author_flair_text_color":null,
                  "score_hidden":false,
                  "permalink":"/r/odense/comments/17tndfx/vi_pr\u00f8ver_igen_mit_urs_pynt_er_faldet_af_da_det/k96vgbz/",
                  "subreddit_type":"public",
                  "link_permalink":"https://www.reddit.com/r/odense/comments/17tndfx/vi_pr\u00f8ver_igen_mit_urs_pynt_er_faldet_af_da_det/",
                  "name":"t1_k96vgbz",
                  "created":1699952805.0,
                  "subreddit_name_prefixed":"r/odense",
                  "author_flair_text":null,
                  "treatment_tags":[
                     
                  ],
                  "rte_mode":"richtext",
                  "created_utc":1699952805.0,
                  "awarders":[
                     
                  ],
                  "all_awardings":[
                     
                  ],
                  "locked":false,
                  "author_flair_background_color":null,
                  "collapsed_because_crowd_control":null,
                  "mod_reports":[
                     
                  ],
                  "quarantine":false,
                  "mod_note":null,
                  "link_url":"https://i.redd.it/suiq062xxxzb1.jpg",
                  "author_flair_template_id":null
               }
            }
         
        ]
      }
    };
    const { getByText } = render(<CommentsChart jsonData={mockData} />);
    expect(getByText('Mock Bar Chart')).toBeInTheDocument();
  });

  // more tests
});
