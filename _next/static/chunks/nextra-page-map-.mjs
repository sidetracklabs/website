import meta from "../../../pages/_meta.ts";
import blog_meta from "../../../pages/blog/_meta.ts";
import guides_meta from "../../../pages/guides/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "blog",
  route: "/blog",
  children: [{
    data: blog_meta
  }, {
    name: "announcing-sidetrack",
    route: "/blog/announcing-sidetrack",
    frontMatter: {
      "title": "Announcing Sidetrack",
      "date": "August 8, 2023",
      "description": "A new way to manage background jobs in your TypeScript backend."
    }
  }]
}, {
  name: "blog",
  route: "/blog",
  frontMatter: {
    "description": "The latest updates and releases from Sidetrack.",
    "type": "posts",
    "sidebarTitle": "Blog"
  }
}, {
  name: "examples",
  route: "/examples",
  children: [{
    name: "transactional-job-insertion",
    route: "/examples/transactional-job-insertion",
    frontMatter: {
      "sidebarTitle": "Transactional Job Insertion"
    }
  }]
}, {
  name: "guides",
  route: "/guides",
  children: [{
    data: guides_meta
  }, {
    name: "configuring-queues",
    route: "/guides/configuring-queues",
    frontMatter: {
      "sidebarTitle": "Configuring Queues"
    }
  }, {
    name: "custom-db-client",
    route: "/guides/custom-db-client",
    frontMatter: {
      "sidebarTitle": "Custom Db Client"
    }
  }, {
    name: "errors-and-logging",
    route: "/guides/errors-and-logging",
    frontMatter: {
      "sidebarTitle": "Errors and Logging"
    }
  }, {
    name: "running-migrations",
    route: "/guides/running-migrations",
    frontMatter: {
      "sidebarTitle": "Running Migrations"
    }
  }, {
    name: "testing-sidetrack",
    route: "/guides/testing-sidetrack",
    frontMatter: {
      "sidebarTitle": "Testing Sidetrack"
    }
  }, {
    name: "using-effect",
    route: "/guides/using-effect",
    frontMatter: {
      "sidebarTitle": "Using Effect"
    }
  }, {
    name: "working-with-types",
    route: "/guides/working-with-types",
    frontMatter: {
      "sidebarTitle": "Working with Types"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "quickstart",
  route: "/quickstart",
  frontMatter: {
    "sidebarTitle": "Quickstart"
  }
}, {
  name: "why-sidetrack",
  route: "/why-sidetrack",
  frontMatter: {
    "sidebarTitle": "Why Sidetrack"
  }
}];