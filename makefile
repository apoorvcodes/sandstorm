all: say_version build test clean

tests: build test clean dev simulate build-sim clean

say_version:
	@echo "rose/infra v1"

build:
	@echo "Building..."
	yarn build

test:
	@echo "Testing..."
	yarn test


dev:
	@echo "Running server up..."
	yarn dev

