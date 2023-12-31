require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
require "action_cable/engine"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module KcosBooking
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.autoload_paths += %W(#{config.root}/lib/modules)
    config.assets.precompile += %w(admin.js admin.scss application.js application.scss)
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)

    config.time_zone = 'Zagreb'

    config.i18n.default_locale = :hr
    I18n.available_locales = [:hr, :en]

    # For custom error pages
    config.exceptions_app = self.routes
    config.to_prepare do
        Devise::Mailer.layout "mailer"
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
